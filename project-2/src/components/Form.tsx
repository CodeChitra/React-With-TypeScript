import {
  ComponentPropsWithoutRef,
  FormEvent,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";

export type FormHandle = {
  clear: () => void;
};
type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (data: unknown) => void;
};
const Form = forwardRef<FormHandle, FormProps>(function (props, ref) {
  const formRef = useRef<HTMLFormElement>(null);
  const { onSave, ...restProps } = props;
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    props.onSave(data);
  };

  useImperativeHandle(ref, () => {
    return {
      clear() {
        formRef.current?.reset();
      },
    };
  });
  return (
    <form onSubmit={handleSubmit} {...restProps} ref={formRef}>
      {props.children}
    </form>
  );
});

export default Form;
