
import React, { useState, useEffect } from 'react';
import { BuilderProvider } from '@/context/BuilderContext';
import BuilderSidebar from '@/components/BuilderSidebar';
import BuilderCanvas from '@/components/BuilderCanvas';
import BuilderToolbar from '@/components/BuilderToolbar';
import TemplateGallery from '@/components/TemplateGallery';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from 'sonner';

const Builder = () => {
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  
  useEffect(() => {
    // Check if there's a saved design in localStorage
    const savedElements = localStorage.getItem('builderElements');
    if (savedElements) {
      toast.info('تم العثور على تصميم محفوظ', {
        description: 'يمكنك استعادة التصميم السابق من خلال لوحة الإعدادات',
        action: {
          label: 'إغلاق',
          onClick: () => {},
        },
      });
    }
  }, []);
  
  return (
    <BuilderProvider>
      <div className="h-screen w-full overflow-hidden bg-background flex flex-col">
        <BuilderToolbar deviceView={deviceView} setDeviceView={setDeviceView} />
        
        <ResizablePanelGroup direction="horizontal" className="flex-1">
          <ResizablePanel defaultSize={25} minSize={20} maxSize={40}>
            <Tabs defaultValue="elements">
              <TabsList className="grid grid-cols-2 gap-4 p-2">
                <TabsTrigger value="elements">العناصر</TabsTrigger>
                <TabsTrigger value="templates">القوالب</TabsTrigger>
              </TabsList>
              
              <TabsContent value="elements" className="m-0">
                <BuilderSidebar />
              </TabsContent>
              
              <TabsContent value="templates" className="m-0">
                <TemplateGallery />
              </TabsContent>
            </Tabs>
          </ResizablePanel>
          
          <ResizableHandle withHandle />
          
          <ResizablePanel defaultSize={75}>
            <BuilderCanvas deviceView={deviceView} />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </BuilderProvider>
  );
};

export default Builder;
