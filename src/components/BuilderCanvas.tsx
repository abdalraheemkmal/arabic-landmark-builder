
import React from 'react';
import { useBuilder } from '@/context/BuilderContext';
import { cn } from '@/lib/utils';
import BuilderElement from '@/components/BuilderElement';

const BuilderCanvas = () => {
  const { elements, setActiveElementId, activeElementId } = useBuilder();
  
  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b bg-secondary/10">
        <h2 className="text-lg font-semibold">منطقة العرض</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto p-8 bg-muted/40">
        <div 
          className="min-h-[1200px] w-full max-w-[1200px] mx-auto bg-white shadow-md rounded-md p-8 border"
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
