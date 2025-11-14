import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Name ist erforderlich").max(100, "Name muss weniger als 100 Zeichen lang sein"),
  email: z.string().trim().email("Ungültige E-Mail-Adresse").max(255, "E-Mail muss weniger als 255 Zeichen lang sein"),
  phone: z.string().trim().min(1, "Telefon ist erforderlich").max(30, "Telefon muss weniger als 30 Zeichen lang sein"),
  message: z.string().trim().min(1, "Nachricht ist erforderlich").max(1000, "Nachricht muss weniger als 1000 Zeichen lang sein"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

interface ContactFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ContactFormDialog = ({ open, onOpenChange }: ContactFormDialogProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Здесь можно добавить отправку данных на сервер
      console.log("Form data:", data);
      
      toast.success("Ihre Anfrage wurde erfolgreich gesendet! Wir melden uns bald bei Ihnen.");
      reset();
      onOpenChange(false);
    } catch (error) {
      toast.error("Es gab einen Fehler beim Senden Ihrer Anfrage. Bitte versuchen Sie es erneut.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Kontakt aufnehmen</DialogTitle>
          <DialogDescription>
            Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              placeholder="Ihr Name"
              {...register("name")}
              className={errors.name ? "border-destructive" : ""}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-Mail *</Label>
            <Input
              id="email"
              type="email"
              placeholder="ihre.email@beispiel.de"
              {...register("email")}
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Telefon *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+49 123 456789"
              {...register("phone")}
              className={errors.phone ? "border-destructive" : ""}
            />
            {errors.phone && (
              <p className="text-sm text-destructive">{errors.phone.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Nachricht *</Label>
            <Textarea
              id="message"
              placeholder="Ihre Nachricht an uns..."
              rows={5}
              {...register("message")}
              className={errors.message ? "border-destructive" : ""}
            />
            {errors.message && (
              <p className="text-sm text-destructive">{errors.message.message}</p>
            )}
          </div>

          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              Abbrechen
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1"
            >
              {isSubmitting ? "Wird gesendet..." : "Anfrage senden"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
