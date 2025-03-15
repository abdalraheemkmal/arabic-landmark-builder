import React from 'react';
import { Button } from "@/components/ui/button";
import { useBuilder } from '@/context/BuilderContext';
import { Smartphone, Tablet, Monitor, Download, Save, Undo, Redo } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useToast } from '@/hooks/use-toast';
import { toast } from 'sonner';
import { useAuth } from '@/context/AuthContext';
import { LogOut } from 'lucide-react';

interface BuilderToolbarProps {
  deviceView: 'desktop' | 'tablet' | 'mobile';
  setDeviceView: (view: 'desktop' | 'tablet' | 'mobile') => void;
}

const BuilderToolbar: React.FC<BuilderToolbarProps> = ({ deviceView, setDeviceView }) => {
  const { elements, undo, redo, history, historyIndex } = useBuilder();
  const { toast: uiToast } = useToast();
  const { logout, user } = useAuth();
  
  const handleSave = () => {
    try {
      localStorage.setItem('builderElements', JSON.stringify(elements));
      toast.success('تم حفظ التصميم بنجاح');
    } catch (error) {
      uiToast({
        variant: "destructive",
        title: "خطأ في الحفظ",
        description: "حدث خطأ أثناء حفظ التصميم"
      });
    }
  };
  
  const handleExport = () => {
    try {
      const dataStr = JSON.stringify(elements, null, 2);
      const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
      
      const exportFileDefaultName = 'page-design.json';
      
      const linkElement = document.createElement('a');
      linkElement.setAttribute('href', dataUri);
      linkElement.setAttribute('download', exportFileDefaultName);
      linkElement.click();
      
      toast.success('تم تصدير التصميم بنجاح');
    } catch (error) {
      uiToast({
        variant: "destructive",
        title: "خطأ في التصدير",
        description: "حدث خطأ أثناء تصدير التصميم"
      });
    }
  };
  
  const canUndo = historyIndex > 0;
  const canRedo = historyIndex < history.length - 1;
  
  return (
    <div className="h-12 bg-background border-b flex items-center px-4 gap-2">
      <div className="mr-4 flex items-center gap-1">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              variant={deviceView === 'desktop' ? 'default' : 'outline'} 
              size="icon" 
              onClick={() => setDeviceView('desktop')}
            >
              <Monitor size={18} />
            </Button>
          </TooltipTrigger>
          <TooltipContent>سطح المكتب</TooltipContent>
        </Tooltip>
        
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              variant={deviceView === 'tablet' ? 'default' : 'outline'} 
              size="icon" 
              onClick={() => setDeviceView('tablet')}
            >
              <Tablet size={18} />
            </Button>
          </TooltipTrigger>
          <TooltipContent>جهاز لوحي</TooltipContent>
        </Tooltip>
        
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              variant={deviceView === 'mobile' ? 'default' : 'outline'} 
              size="icon" 
              onClick={() => setDeviceView('mobile')}
            >
              <Smartphone size={18} />
            </Button>
          </TooltipTrigger>
          <TooltipContent>هاتف محمول</TooltipContent>
        </Tooltip>
      </div>
      
      <div className="border-r h-6 mx-2" />
      
      <Tooltip>
        <TooltipTrigger asChild>
          <Button 
            variant="outline" 
            size="icon"
            onClick={undo}
            disabled={!canUndo}
          >
            <Undo size={18} />
          </Button>
        </TooltipTrigger>
        <TooltipContent>تراجع</TooltipContent>
      </Tooltip>
      
      <Tooltip>
        <TooltipTrigger asChild>
          <Button 
            variant="outline" 
            size="icon"
            onClick={redo}
            disabled={!canRedo}
          >
            <Redo size={18} />
          </Button>
        </TooltipTrigger>
        <TooltipContent>إعادة</TooltipContent>
      </Tooltip>
      
      <div className="border-r h-6 mx-2" />
      
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="sm" onClick={handleSave}>
            <Save size={16} className="mr-2" />
            حفظ
          </Button>
        </TooltipTrigger>
        <TooltipContent>حفظ التصميم</TooltipContent>
      </Tooltip>
      
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="sm" onClick={handleExport}>
            <Download size={16} className="mr-2" />
            تصدير
          </Button>
        </TooltipTrigger>
        <TooltipContent>تصدير التصميم</TooltipContent>
      </Tooltip>
      
      <div className="flex-1" />
      
      {user && (
        <>
          <div className="flex items-center gap-2 ml-4">
            <span className="text-sm">{user.name}</span>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={logout}
                >
                  <LogOut size={18} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>تسجيل الخروج</TooltipContent>
            </Tooltip>
          </div>
        </>
      )}
    </div>
  );
};

export default BuilderToolbar;
