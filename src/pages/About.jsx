import { motion } from "framer-motion"
function About() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex items-center justify-center h-screen p-4">
      <div className="grid grid-cols-12 container w-full h-full items-center justify-center">
        <div className="col-span-12 md:col-span-6 border-r-2 border-brand-200">
          <h1 className="px-1 sm:px-4 md:px-8 font-extrabold py-10 flex flex-col sm:flex-row items-center sm:items-end select-none">
            <img src="/src/assets/logo-color.png" className='w-fit h-28 object-cover' alt="" />
            <span>التعليم أسهل</span>
          </h1>
          <p className="px-1 sm:px-4 py-8 font-bold">
            تجربة تعليمية مميزة مع
            <Zakerly />
            واختبارات الكترونية شرح مباشر مع افضل المعلمين في اغلب الصفوف الدراسية في مصر.
          </p>
          <p className="px-1 sm:px-4 py-8 font-bold">
            هدفنا هو تسهيل العملية الدراسية لكل من الطالب والمعلم
            نسعي جاهدين لنساعد في تحسين عملية التعليم عن بعد وذالك من خلال توصيل الطالب بالمعلم من خلال
            <Zakerly />.

          </p>

        </div>
        <div className="col-span-12 md:col-span-6">
          <img src="/src/assets/about-us.png" />
        </div>
      </div>
    </motion.div>
  )
}

export default About

const Zakerly = () => {
  return <span className='text-brand-700 font-extrabold select-none'> منصة ذاكرلي </span>
}