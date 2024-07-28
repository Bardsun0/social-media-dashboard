import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import { profileSchema } from "../utils/validationSchemas";
import { pageTransition, pageVariants } from "../utils/animations";

function Profile() {
  // react-hook-form ile form yönetimi
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(profileSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // Burada profil güncelleme işlemlerini yapacaksınız
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen flex items-center justify-center p-4"
    >
      <div className="bg-white p-6 rounded-lg shadow-card max-w-lg w-full">
        <h1 className="text-3xl font-heading font-bold mb-4 text-center text-primary">
          Profile
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-text-dark font-body text-xl">
              Name
            </label>
            <motion.input
              whileFocus={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              type="text"
              {...register("name")}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            {errors.name && (
              <p className="text-accent font-accent">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-text-dark font-body text-xl">
              Email
            </label>
            <motion.input
              whileFocus={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              type="email"
              {...register("email")}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            {errors.email && (
              <p className="text-accent font-accent">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-text-dark font-body text-xl">
              Profile Picture
            </label>
            <motion.input
              whileFocus={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              type="file"
              {...register("profilePicture")}
              className="w-full mt-2 p-2 text-text-dark font-body text-xl border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            {errors.profilePicture && (
              <p className="text-accent font-accent">
                {errors.profilePicture.message}
              </p>
            )}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-secondary text-white py-3 rounded-md hover:bg-opacity-90 transition duration-300 font-body font-bold"
          >
            Update Profile
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
}

export default Profile;
