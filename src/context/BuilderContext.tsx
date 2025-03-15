
import { createContext, useState, useContext, ReactNode, useEffect } from 'react';

// Define element types
export type ElementType = 
  | 'heading'
  | 'paragraph'
  | 'button'
  | 'image'
  | 'spacer'
  | 'divider'
  | 'container'
  | 'hero'
  | 'features'
  | 'testimonial'
  | 'cta';

// Define the element interface
export interface BuilderElement {
  id: string;
  type: ElementType;
  content?: string;
  props?: Record<string, any>;
  children?: BuilderElement[];
}

// Define the context interface
interface BuilderContextType {
  elements: BuilderElement[];
  activeElementId: string | null;
  setElements: (elements: BuilderElement[]) => void;
  addElement: (type: ElementType, props?: Record<string, any>) => void;
  updateElement: (id: string, updates: Partial<BuilderElement>) => void;
  removeElement: (id: string) => void;
  setActiveElementId: (id: string | null) => void;
  duplicateElement: (id: string) => void;
  moveElement: (id: string, direction: 'up' | 'down') => void;
  history: Array<BuilderElement[]>;
  historyIndex: number;
  undo: () => void;
  redo: () => void;
  loadSavedDesign: () => boolean;
  clearDesign: () => void;
}

// Create the context
const BuilderContext = createContext<BuilderContextType | undefined>(undefined);

// Create a provider component
export const BuilderProvider = ({ children }: { children: ReactNode }) => {
  const [elements, setElements] = useState<BuilderElement[]>([]);
  const [activeElementId, setActiveElementId] = useState<string | null>(null);
  const [history, setHistory] = useState<Array<BuilderElement[]>>([[]]);
  const [historyIndex, setHistoryIndex] = useState(0);

  // Try to load saved design on mount
  useEffect(() => {
    loadSavedDesign();
  }, []);

  // Load a saved design from localStorage
  const loadSavedDesign = (): boolean => {
    try {
      const savedElements = localStorage.getItem('builderElements');
      if (savedElements) {
        const parsedElements = JSON.parse(savedElements);
        updateElementsWithHistory(parsedElements);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error loading saved design:', error);
      return false;
    }
  };

  // Clear the current design
  const clearDesign = () => {
    updateElementsWithHistory([]);
    setActiveElementId(null);
  };

  // Add a new element to the builder
  const addElement = (type: ElementType, props: Record<string, any> = {}) => {
    const newElement: BuilderElement = {
      id: `element-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      type,
      props,
    };
    
    if (type === 'heading') {
      newElement.content = 'انقر لتعديل العنوان';
    } else if (type === 'paragraph') {
      newElement.content = 'انقر لتعديل نص الفقرة. يمكنك إضافة وصف أو معلومات أو أي محتوى نصي هنا.';
    } else if (type === 'button') {
      newElement.content = 'انقر هنا';
      newElement.props = { ...newElement.props, variant: 'primary', size: 'default' };
    }
    
    const newElements = [...elements, newElement];
    updateElementsWithHistory(newElements);
  };

  // Update an existing element
  const updateElement = (id: string, updates: Partial<BuilderElement>) => {
    const newElements = elements.map(element => 
      element.id === id ? { ...element, ...updates } : element
    );
    updateElementsWithHistory(newElements);
  };

  // Remove an element
  const removeElement = (id: string) => {
    const newElements = elements.filter(element => element.id !== id);
    updateElementsWithHistory(newElements);
    if (activeElementId === id) {
      setActiveElementId(null);
    }
  };

  // Duplicate an element
  const duplicateElement = (id: string) => {
    const elementToDuplicate = elements.find(element => element.id === id);
    if (elementToDuplicate) {
      const duplicatedElement: BuilderElement = {
        ...elementToDuplicate,
        id: `element-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      };
      
      // Find the index of the original element
      const index = elements.findIndex(element => element.id === id);
      
      // Insert the duplicated element after the original
      const newElements = [
        ...elements.slice(0, index + 1),
        duplicatedElement,
        ...elements.slice(index + 1)
      ];
      
      updateElementsWithHistory(newElements);
    }
  };

  // Move an element up or down
  const moveElement = (id: string, direction: 'up' | 'down') => {
    const index = elements.findIndex(element => element.id === id);
    if (index === -1) return;
    
    const newElements = [...elements];
    
    if (direction === 'up' && index > 0) {
      const temp = newElements[index];
      newElements[index] = newElements[index - 1];
      newElements[index - 1] = temp;
    } else if (direction === 'down' && index < newElements.length - 1) {
      const temp = newElements[index];
      newElements[index] = newElements[index + 1];
      newElements[index + 1] = temp;
    }
    
    updateElementsWithHistory(newElements);
  };

  // Update elements with history tracking
  const updateElementsWithHistory = (newElements: BuilderElement[]) => {
    // Add the new state to history, removing any future states if we've gone back in time
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(newElements);
    
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
    setElements(newElements);
  };

  // Undo the last action
  const undo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setElements(history[historyIndex - 1]);
    }
  };

  // Redo a previously undone action
  const redo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setElements(history[historyIndex + 1]);
    }
  };

  return (
    <BuilderContext.Provider
      value={{
        elements,
        activeElementId,
        setElements,
        addElement,
        updateElement,
        removeElement,
        setActiveElementId,
        duplicateElement,
        moveElement,
        history,
        historyIndex,
        undo,
        redo,
        loadSavedDesign,
        clearDesign,
      }}
    >
      {children}
    </BuilderContext.Provider>
  );
};

// Custom hook to use the builder context
export const useBuilder = () => {
  const context = useContext(BuilderContext);
  if (context === undefined) {
    throw new Error('useBuilder must be used within a BuilderProvider');
  }
  return context;
};
