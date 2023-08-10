interface Props {
  children: React.ReactNode;
  variant: string;
}

export default function Button({ children, variant }: Props) {
  return <button>{children}</button>;
}
