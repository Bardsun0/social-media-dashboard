import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { registerSchema } from "../utils/validationSchemas";
import { pageTransition, pageVariants } from "../utils/animations";
import { useDispatch, useSelector } from "react-redux";
import { registerRequest } from "../redux/actions/authActions";

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  // react-hook-form ile form yönetimi
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // Burada kayıt işlemlerini yapacaksınız
    dispatch(registerRequest(data));
    // Başarılı kayıt sonrası Login sayfasına yönlendirme
    navigate("/Dashboard");
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-heading font-bold mb-6 text-center text-primary">
          Register
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-text-dark text-xl">Name</label>
            <motion.input
              whileFocus={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              type="text"
              {...register("name")}
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            {errors.name && (
              <p className="text-accent font-accent">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-text-dark text-xl">Email</label>
            <motion.input
              whileFocus={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              type="email"
              {...register("email")}
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            {errors.email && (
              <p className="text-accent font-accent">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-text-dark text-xl">Password</label>
            <motion.input
              whileFocus={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              type="password"
              {...register("password")}
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            {errors.password && (
              <p className="text-accent font-accent">
                {errors.password.message}
              </p>
            )}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-secondary text-white py-3 rounded-md hover:bg-opacity-90 transition duration-300 font-body font-bold"
          >
            Register
          </motion.button>
        </form>
        <p className="mt-4 text-center font-body text-text-dark text-xl">
          Already have an account?{" "}
          <Link to="/" className="text-accent font-accent text-xl">
            Login
          </Link>
        </p>
      </div>
    </motion.div>
  );
}

export default Register;
