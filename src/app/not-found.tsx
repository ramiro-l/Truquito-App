import ButtonLink from "@/components/ui/button";

export default function Error404() {
  return (
    <section className="h-screen w-screen flex justify-center items-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold  md:text-4xl ">
            La página no existe
          </p>
          <p className="mb-4 text-lg font-light">
            No encontramos la página que estas buscando.
          </p>
          <ButtonLink text="Volver al inicio" href="/" />
        </div>
      </div>
    </section>
  );
}
