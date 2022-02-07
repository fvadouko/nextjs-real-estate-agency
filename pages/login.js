import { useEffect, useState } from "react";
import { MDBContainer, MDBInput } from "mdbreact";
import Layout from "../components/layout";
import useAuth from "../auth/context";
import { useRouter } from "next/router";

const LoginPage = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const router = useRouter();
  const { login, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    login(values.username, values.password);
  };
  const styles = {
    mb6: {
      marginBottom: "6rem",
    },
  };
  return (
    <Layout>
      <MDBContainer style={styles.mb6}>
        <form onSubmit={onSubmit}>
          <div className="grey-text">
            <MDBInput
              label="Nom d'utilisateur"
              icon="user"
              group
              name="username"
              type="text"
              onChange={handleChange("username")}
            />
            <MDBInput
              label="Mot de passe"
              name="password"
              onChange={handleChange("password")}
              icon="lock"
              group
              type="password"
              validate
            />
          </div>
          <div className="text-center">
            <button type="submit" className="globalButton">
              Sign in
            </button>
          </div>
        </form>
      </MDBContainer>
      <MDBContainer className="my-5"></MDBContainer>
    </Layout>
  );
};

export default LoginPage;
