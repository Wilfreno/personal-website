import { motion } from "framer-motion";
import { CheckIcon, CopyIcon, PaperPlaneIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { submitForm } from "@/lib/actions";
import { FormContent } from "@/lib/types";
import { useToast } from "@/components/ui/use-toast";
import SubmitButton from "./SubmitButton";

export default function EmailForm() {
  const { toast } = useToast();
  const [formState, formAction] = useFormState(submitForm, {
    message: "",
    error: undefined,
    values: {
      from: "",
      subject: "",
      message: "",
    },
  });
  const [copied, setCopied] = useState(false);
  const [form_content, setFormContent] = useState<FormContent>();

  useEffect(() => {
    if (formState.message !== "") {
      toast({
        title: formState.message,
        description: formState.error ?? "The Email has been sent",
      });
    }
  }, [formState]);
  useEffect(() => {
    const session_from = sessionStorage.getItem("from");
    if (session_from)
      setFormContent((prev) => ({
        ...prev!,
        values: { ...prev?.values!, from: session_from },
      }));

    const session_subject = sessionStorage.getItem("subject");
    if (session_subject)
      setFormContent((prev) => ({
        ...prev!,
        values: { ...prev?.values!, subject: session_subject },
      }));

    const session_message = sessionStorage.getItem("message");
    if (session_message)
      setFormContent((prev) => ({
        ...prev!,
        values: { ...prev?.values!, message: session_message },
      }));
  }, []);
  return (
    <form
      action={formAction}
      autoComplete="off"
      className="grid grid-rows-[auto_1fr] grow space-y-5"
    >
      <div className="space-y-2 px-2 ">
        <span className=" relative flex items-center whitespace-nowrap space-x-2">
          <Label>To :</Label>
          <Input disabled value="w.gayongan@gmail.com" />
          {copied ? (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute right-2 flex items-center"
              key="check"
            >
              <p className="text-xs">copied</p>
              <CheckIcon className="h-5 w-auto" />
            </motion.span>
          ) : (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute right-2"
              key="copy"
            >
              <CopyIcon
                className="h-5 w-auto cursor-pointer"
                onClick={async () => {
                  await navigator.clipboard.writeText("w.gayongan@gmail.com");
                  setCopied(true);
                }}
              />
            </motion.span>
          )}
        </span>
        <span className="flex whitespace-nowrap items-center space-x-2">
          <Label htmlFor="from">From :</Label>
          <Input
            placeholder="Email"
            required
            type="email"
            id="from"
            name="from"
            value={form_content?.values.from}
            onChange={(e) => {
              setFormContent((prev) => ({
                ...prev!,
                values: { ...prev?.values!, from: e.target.value },
              }));
              sessionStorage.setItem("from", e.target.value);
            }}
          />
        </span>
        <span className="flex whitespace-nowrap items-center space-x-2">
          <Label htmlFor="subject">Subject :</Label>
          <Input
            placeholder="Subject"
            id="subject"
            name="subject"
            value={form_content?.values.subject}
            onChange={(e) => {
              setFormContent((prev) => ({
                ...prev!,
                values: {
                  ...prev?.values!,
                  subject: e.target.value,
                },
              }));
              sessionStorage.setItem("subject", e.target.value);
            }}
          />
        </span>
      </div>
      <div className="grow relative">
        <Textarea
          name="message"
          placeholder="Message"
          className="resize-none h-full w-full"
          value={form_content?.values.message}
          onChange={(e) => {
            setFormContent((prev) => ({
              ...prev!,
              values: { ...prev?.values!, message: e.target.value },
            }));
            sessionStorage.setItem("message", e.target.value);
          }}
        />
        {form_content?.values.message && <SubmitButton />}
      </div>
    </form>
  );
}
