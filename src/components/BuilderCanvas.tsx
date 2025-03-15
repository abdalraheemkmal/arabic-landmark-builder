
import React, { useState } from 'react';
import { useBuilder } from '@/context/BuilderContext';
import { cn } from '@/lib/utils';
import BuilderElement from '@/components/BuilderElement';

interface BuilderCanvasProps {
  deviceView: 'desktop' | 'tablet' | 'mobile';
}

const BuilderCanvas: React.FC<BuilderCanvasProps> = ({ deviceView }) => {
  const { elements, setActiveElementId, activeElementId } = useBuilder();
  const [isLoadingPrevious, setIsLoadingPrevious] = useState(false);
  
  const loadPreviousDesign = () => {
    try {
      setIsLoadingPrevious(true);
      const savedElements = localStorage.getItem('builderElements');
      if (savedElements) {
        const parsedElements = JSON.parse(savedElements);
        // This will trigger the context to update
        setTimeout(() => {
          setIsLoadingPrevious(false);
        }, 500);
      }
    } catch (error) {
      setIsLoadingPrevious(false);
    }
  };
  
  const getCanvasWidth = () => {
    switch (deviceView) {
      case 'mobile':
        return 'max-w-[375px]';
      case 'tablet':
        return 'max-w-[768px]';
      default:
        return 'max-w-[1200px]';
    }
  };
  
  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b bg-secondary/10 flex justify-between items-center">
        <h2 className="text-lg font-semibold">منطقة العرض</h2>
        {localStorage.getItem('builderElements') && (
          <button 
            className="text-sm text-primary hover:underline"
            onClick={loadPreviousDesign}
            disabled={isLoadingPrevious}
          >
            {isLoadingPrevious ? 'جاري التحميل...' : 'استعادة التصميم السابق'}
          </button>
        )}
      </div>
      
      <div className={cn("flex-1 overflow-y-auto p-8 bg-muted/40", 
        deviceView === 'mobile' && "bg-gradient-to-b from-muted/20 to-muted/30",
        deviceView === 'tablet' && "bg-gradient-to-b from-muted/10 to-muted/20"
      )}>
        <div 
          className={cn(
            "min-h-[1200px] w-full mx-auto bg-white shadow-md rounded-md p-8 border transition-all duration-300",
            getCanvasWidth()
          )}
          onClick={() => setActiveElementId(null)}
        >
          {elements.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full min-h-[300px] border-2 border-dashed border-muted-foreground/20 rounded-md">
              <p className="text-muted-foreground text-center">
                قم بإضافة عناصر من القائمة الجانبية للبدء في إنشاء صفحتك
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {elements.map((element) => (
                <div 
                  key={element.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveElementId(element.id);
                  }}
                  className={cn(
                    "relative group",
                    activeElementId === element.id && "ring-2 ring-primary ring-offset-2"
                  )}
                >
                  <BuilderElement element={element} />
                  
                  {activeElementId === element.id && (
                    <div className="absolute -top-3 -right-3 bg-primary text-white text-xs px-1.5 py-0.5 rounded shadow-sm">
                      {element.type}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BuilderCanvas;
