
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CalendarClock } from 'lucide-react';

interface ComingSoonDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  featureName: string;
}

const ComingSoonDialog: React.FC<ComingSoonDialogProps> = ({
  open,
  onOpenChange,
  featureName
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md border-0 shadow-xl bg-gradient-to-br from-white to-zeroprint-cream/30">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-zeroprint-green">
            <div className="bg-zeroprint-green/10 p-2 rounded-full">
              <CalendarClock className="w-6 h-6 text-zeroprint-green" /> 
            </div>
            <span className="text-xl">Coming Soon</span>
          </DialogTitle>
          <DialogDescription className="pt-6 text-center">
            <div className="mb-5">
              <div className="bg-gradient-to-br from-zeroprint-green/10 to-zeroprint-green/5 p-6 rounded-xl mb-5 shadow-inner">
                <p className="text-lg font-medium text-zeroprint-green">{featureName}</p>
              </div>
              <p className="text-gray-600">
                We're working hard to bring you this feature. Join our waitlist to be notified when it's ready!
              </p>
            </div>
            <button 
              onClick={() => onOpenChange(false)}
              className="mt-2 bg-zeroprint-green text-white px-6 py-2.5 rounded-lg hover:bg-zeroprint-green/90 transition-all transform hover:-translate-y-0.5 shadow-md"
            >
              Got it
            </button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ComingSoonDialog;
