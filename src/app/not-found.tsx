import ButtonLink from '@/components/ui/button';

export default function Error404() {
  return (
    <section className="flex h-screen w-screen items-center justify-center">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="text-primary-600 dark:text-primary-500 mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl">
            404
          </h1>
          <p className="mb-4 text-3xl font-bold tracking-tight  md:text-4xl ">
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
