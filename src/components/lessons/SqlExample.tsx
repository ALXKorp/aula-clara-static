type SqlExampleProps = {
  code: string;
};

export function SqlExample({ code }: SqlExampleProps) {
  return (
    <pre className="overflow-x-auto rounded-lg border border-[#cbd9d2] bg-[#172422] p-5 text-sm leading-7 text-[#e8f4ef] shadow-sm">
      <code>{code}</code>
    </pre>
  );
}
