import "./styles.css";

type Props = {
  modal: React.ReactNode;
  children: React.ReactNode;
};

export default function Layout(props: Props) {
  return (
    <>
      {props.modal}
      {props.children}
    </>
  );
}
