export type StatProps = {
  icon: React.ReactNode;
  value: number | string;
  title: string;
  color: keyof typeof colors;
};

export const colors = {
  primary: "bg-primary-100 text-primary-700",
  green: "bg-green-100 text-green-700",
  yellow: "bg-blue-100 text-blue-700",
};
