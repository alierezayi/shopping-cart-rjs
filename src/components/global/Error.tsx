function Error({ message }: { message: string }) {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <h1 className="text-xl font-semibold text-red-700">{message}</h1>
    </div>
  );
}

export default Error;
