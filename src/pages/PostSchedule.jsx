import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import { postScheduleSchema } from "../utils/validationSchemas";
import { pageTransition, pageVariants } from "../utils/animations";

function PostSchedule() {
  // react-hook-form ile form yönetimi
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(postScheduleSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // Burada post planlama işlemlerini yapacaksınız
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
        <h1 className="text-3xl font-bold mb-4 text-center">Post Schedule</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700">Post Content</label>
            <motion.textarea
              whileFocus={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              {...register("content")}
              className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
            ></motion.textarea>
            {errors.content && (
              <p className="text-red-500">{errors.content.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Media</label>
            <motion.input
              whileFocus={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              type="file"
              {...register("media")}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            {errors.media && (
              <p className="text-red-500">{errors.media.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Schedule Date</label>
            <motion.input
              whileFocus={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              type="date"
              {...register("scheduleDate")}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            {errors.scheduleDate && (
              <p className="text-red-500">{errors.scheduleDate.message}</p>
            )}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Schedule Post
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
}

export default PostSchedule;
