import React, { useEffect, useState } from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import Modal from "./Modal";
import Button from "./Button";
import Select, { SelectOption } from "./Select";

const agencies = ["Delta IRS", "State Treasury", "Revenue Taskforce"];
const revenueStreams = ["PAYE", "Withholding Tax", "Business Premise Levy"];
const countries = ["Nigeria"];
const states = [
  "Lagos State",
  "Ogun State",
  "Kwara State",
  "Delta State",
  "Edo State",
  "Rivers State",
];
const lgas = [
  "Ikeja",
  "Alimosho",
  "Agege",
  "Epe",
  "Badagary",
  "Aniocha North",
  "Ethiope West",
  "Oshimili South",
  "Warri North",
];

interface FormValues {
  surname: string;
  otherNames: string;
  agency: string;
  revenue: string;
  amount: string;
  paymentPeriod: string;
  street: string;
  country: string;
  state: string;
  city: string;
  lga: string;
  telephone: string;
  email: string;
}

const initialValues: FormValues = {
  surname: "",
  otherNames: "",
  agency: "",
  revenue: "",
  amount: "",
  paymentPeriod: "",
  street: "",
  country: "Nigeria",
  state: "Lagos State",
  city: "",
  lga: "",
  telephone: "",
  email: "",
};

interface ReceiptDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReceiptDetailsModal: React.FC<ReceiptDetailsModalProps> = ({ isOpen, onClose }) => {
  const [formValues, setFormValues] = useState<FormValues>(initialValues);

  useEffect(() => {
    if (!isOpen) {
      setFormValues(initialValues);
    }
  }, [isOpen]);

  const updateField = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      title="Receipt Information"
      onClose={onClose}
      size="xl"
      className="text-gray-800"
    >
      <form onSubmit={handleSubmit} className="space-y-8 text-sm text-blue-900">
        <section className="space-y-4">
          <div className="border-b border-gray-200 pb-2">
            <h3 className="text-base font-semibold text-gray-900">Payment Information</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium" htmlFor="surname">
                Surname or Company Name *
              </label>
              <input
                id="surname"
                name="surname"
                value={formValues.surname}
                onChange={updateField}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Enter surname"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="otherNames">
                Other Names
              </label>
              <input
                id="otherNames"
                name="otherNames"
                value={formValues.otherNames}
                onChange={updateField}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Enter other names"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="agency">
                Agency *
              </label>
              <Select
                options={agencies.map((a) => ({ label: a, value: a }))}
                value={formValues.agency}
                onChange={updateField}
                placeholder="Click to select agency"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="revenue">
                Revenue *
              </label>
              <Select
                options={revenueStreams.map((r) => ({ label: r, value: r }))}
                value={formValues.revenue}
                onChange={updateField}
                placeholder="Choose revenue type"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="amount">
                Enter Amount to be paid (₦) *
              </label>
              <input
                id="amount"
                name="amount"
                value={formValues.amount}
                onChange={updateField}
                type="number"
                step="0.01"
                className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="0.00"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="paymentPeriod">
                Payment Period
              </label>
              <input
                id="paymentPeriod"
                name="paymentPeriod"
                value={formValues.paymentPeriod}
                onChange={updateField}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="e.g. Jan - Mar 2026"
              />
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div className="border-b border-gray-200 pb-2">
            <h3 className="text-base font-semibold text-gray-900">Other Information</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="block mb-1 font-medium" htmlFor="street">
                Street No and Name *
              </label>
              <input
                id="street"
                name="street"
                value={formValues.street}
                onChange={updateField}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="House 10, Okpanam Road"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="country">
                Country *
              </label>
              <Select
                options={countries.map((c) => ({ label: c, value: c }))}
                value={formValues.country}
                onChange={updateField}
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="state">
                State *
              </label>
              <Select
                options={states.map((s) => ({ label: s, value: s }))}
                value={formValues.state}
                onChange={updateField}
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="city">
                City *
              </label>
              <input
                id="city"
                name="city"
                value={formValues.city}
                onChange={updateField}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Asaba"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="lga">
                LGA *
              </label>
              <Select
                options={lgas.map((area) => ({ label: area, value: area }))}
                value={formValues.lga}
                onChange={updateField}
                placeholder="Click to select LGA"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="telephone">
                Telephone *
              </label>
              <input
                id="telephone"
                name="telephone"
                value={formValues.telephone}
                onChange={updateField}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="0801 234 5678"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="email">
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formValues.email}
                onChange={updateField}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>
        </section>

        <div className="flex justify-end">
          <Button type="submit" variant="default" className="inline-flex items-center gap-2">
            <EyeIcon className="w-5 h-5" />
            Review Entries
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default ReceiptDetailsModal;
