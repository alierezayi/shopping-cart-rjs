function Error({ message }: { message: string }) {
  return (
    <div className="w-full min-h-[calc(100vh-213px)] flex justify-center items-center">
      <h1 className="text-xl font-semibold text-red-700">{message}</h1>
    </div>
  );
}

export default Error;
