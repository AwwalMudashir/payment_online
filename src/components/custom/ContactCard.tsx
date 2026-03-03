import React from "react";
import { SVGProps } from "react";

interface ContactCardProps {
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  info: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon: Icon, title, info }) => {
  return (
    <div className="rounded-xl bg-gray-100 p-3 space-y-3">
      <Icon className="h-5 w-5 text-blue-400" />

      <h2 className="text-xl text-">{title}</h2>

      <p className="text-sm">{info}</p>
    </div>
  );
};

export default ContactCard;
