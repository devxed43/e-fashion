import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const Authentication = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
