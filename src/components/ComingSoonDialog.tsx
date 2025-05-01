
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
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-zeroprint-green">
            <CalendarClock className="w-5 h-5" /> 
            Coming Soon
          </DialogTitle>
          <DialogDescription className="pt-4 text-center">
            <div className="mb-4">
              <div className="bg-zeroprint-green/10 p-6 rounded-lg mb-4">
                <p className="text-lg font-medium text-zeroprint-green">{featureName}</p>
              </div>
              <p className="text-gray-600">
                We're working hard to bring you this feature. Join our waitlist to be notified when it's ready!
              </p>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ComingSoonDialog;
