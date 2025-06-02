import clsx from "clsx";

type DialogProps = {
  isVisible?: boolean;
  title: string;
};

export function Dialog({ isVisible = false }: DialogProps) {
  if (!isVisible) return null;

  return (
    <div
      className={clsx(
        "z-50 fixed inset-0 bg-black/50 backdrop-blur-xs",
        "flex items-center justify-center"
      )}
    >
      <div
        className={clsx(
          "bg-slate-100 p-6 rounded-lg max-w-2xl mx-6",
          "flex flex-col gap-6 text-center",
          "shadow-lg shadow-black/30"
        )}
      >
        <h3 className="font-extrabold text-xl">Título do diálogo</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          dolorum, aut magni velit maxime nihil. Dicta maiores doloremque,
          assumenda nisi asperiores debitis explicabo quaerat pariatur natus
          tempore optio, adipisci laboriosam.
        </p>
        <div className="flex items-center justify-around">
          <button
            className={clsx(
              "bg-slate-300 hover:bg-slate-400 text-slate-950 transition",
              "flex items-center justify-center",
              "py-2 px-4 rounded-lg cursor-pointer"
            )}
            autoFocus
          >
            Cancelar
          </button>
          <button
            className={clsx(
              "bg-blue-500 hover:bg-blue-600 text-blue-50 transition",
              "flex items-center justify-center",
              "py-2 px-4 rounded-lg cursor-pointer"
            )}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
}
