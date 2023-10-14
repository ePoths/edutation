interface DummyTyps {
  text: string;
  active?: boolean;
}

function Dummy({ text, active = false }: DummyTyps) {
  return <div>{text}</div>;
}
export default Dummy;
