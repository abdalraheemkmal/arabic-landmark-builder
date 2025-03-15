
import React from 'react';
import { BuilderProvider } from '@/context/BuilderContext';
import BuilderSidebar from '@/components/BuilderSidebar';
import BuilderCanvas from '@/components/BuilderCanvas';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";

const Builder = () => {
  return (
    <BuilderProvider>
      <div className="h-screen w-full overflow-hidden bg-background">
        <ResizablePanelGroup direction="horizontal" className="min-h-screen">
          <ResizablePanel defaultSize={25} minSize={20} maxSize={40}>
            <BuilderSidebar />
          </ResizablePanel>
          
          <ResizableHandle withHandle />
          
          <ResizablePanel defaultSize={75}>
            <BuilderCanvas />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </BuilderProvider>
  );
};

export default Builder;
