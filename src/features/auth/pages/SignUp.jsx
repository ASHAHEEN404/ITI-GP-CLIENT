import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SignUpValidation from "../validations/SignUpValidation"; // Import validation schema
import InputForm from "../components/InputForm"; // Import input component
import signup from "../../../assets/Online learning-amico.svg";
import logo from "../../../assets/Group 3.svg";
export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignUpValidation),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  const levels = [
    { label: "المرحلة الأولى", value: "level1" },
    { label: "المرحلة الثانية", value: "level2" },
    { label: "المرحلة الثالثة", value: "level3" },
    { label: "المرحلة الرابعة", value: "level4" },
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-around items-center h-screen bg-gradient-to-b from-brand-200  ">
      <img
        src={signup}
        alt="signup"
        className="w-[30%] object-contain   hidden lg:block"
      />
      <div className="flex flex-col text-right  justify-items-around lg:w-[30%] w-[90%] h-[100%]">
        <div className=" flex  items-center justify-end  mt-[30px] mb-[30px] w-[100%] ">
          <h2 className="text-4xl text-brand-700 font-bold  ">
            تسجيل حساب جديد
          </h2>
          <img src={logo} alt="signup" className="w-[20%] object-contain" />
        </div>
        {/* <h2 className="text-2xl text-brand-700 font-semibold mb-[30px] ">
يمكنك الان الانضمام لفريق ذاكرلي لتستمع بتجربه لذيذه وممتعه           </h2> */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="text-right w-[100%] "
        >
          <div className="flex flex-col lg:flex-row-reverse lg:justify-items-between  gap-4">
            <InputForm
              label=" الاسم الاول"
              type="text"
              placeholder="اسمك"
              error={errors.firstName}
              register={register("firstName")}
            />
            <InputForm
              label="الاسم الثاني"
              type="text"
              placeholder="اسمك"
              error={errors.lastName}
              register={register("lastName")}
            />
          </div>
          <InputForm
            label="البريد الإلكتروني"
            type="email"
            placeholder="بريدك الإلكتروني"
            error={errors.email}
            register={register("email")}
          />
          <InputForm
            label="رقم الهاتف"
            type="text"
            placeholder="رقم الهاتف"
            error={errors.phone}
            register={register("phone")}
          />
          <InputForm
            label="الرقم القومي"
            type="text"
            placeholder="الرقم القومي"
            error={errors.nationalID}
            register={register("nationalID")}
          />
          <InputForm
            label="رقم الهاتف ولي الأمر"
            type="text"
            placeholder="رقم الهاتف ولي الأمر"
            error={errors.parentPhone}
            register={register("parentPhone")}
          />
          <InputForm
            label="المرحلة"
            type="select"
            placeholder="اختر المرحلة"
            error={errors.level}
            register={register("level")}
            options={levels}
          />
          <InputForm
            label="كلمة المرور"
            type="password"
            placeholder="كلمة المرور"
            error={errors.password}
            register={register("password")}
          />
          <InputForm
            label="تأكيد كلمة المرور"
            type="password"
            placeholder="تأكيد كلمة المرور"
            error={errors.confirmPassword}
            register={register("confirmPassword")}
          />
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold my-3 p-3 w-full rounded-lg"
            >
              تسجيل
            </button>
          </div>
        </form>
        <p className="text-center">
          هل لديك حساب؟{" "}
          <a className="text-brand-700" href="/login">
            تسجيل الدخول
          </a>
        </p>
      </div>
    </div>
  );
}
