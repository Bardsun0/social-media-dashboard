import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import { postScheduleSchema } from "../utils/validationSchemas";
import { pageTransition, pageVariants } from "../utils/animations";
import { useSelector } from "react-redux";
import api from "../utils/api";

function PostSchedule() {
  const { user } = useSelector((state) => state.auth);

  // react-hook-form ile form yönetimi
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(postScheduleSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await api.post("/schedule-post", data);
      // Post planlama başarılı olduğunda yapılacak işlemler
    } catch (error) {
      // Hata durumunda yapılacak işlemler
    }
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
      <div className="bg-white p-6 rounded-lg shadow-md max-w-lg w-full">
        <h1 className="text-3xl font-heading font-bold mb-4 text-center text-primary">
          Post Schedule
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-text-dark font-body text-xl">
              Post Content
            </label>
            <motion.textarea
              whileFocus={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              {...register("content")}
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
            ></motion.textarea>
            {errors.content && (
              <p className="text-accent font-accent">
                {errors.content.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-text-dark font-body text-xl">
              Media
            </label>
            <motion.input
              whileFocus={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              type="file"
              {...register("media")}
              className="w-full mt-2 p-2 text-text-dark font-body text-xl border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            {errors.media && (
              <p className="text-accent font-accent">{errors.media.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-text-dark font-body text-xl">
              Schedule Date
            </label>
            <motion.input
              whileFocus={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              type="date"
              {...register("scheduleDate")}
              className="w-full mt-2 p-2 text-text-dark font-body text-xl border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            {errors.scheduleDate && (
              <p className="text-accent font-accent">
                {errors.scheduleDate.message}
              </p>
            )}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-secondary text-white py-3 rounded-md hover:bg-opacity-90 transition duration-300 font-body font-bold"
          >
            Schedule Post
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
}

export default PostSchedule;
