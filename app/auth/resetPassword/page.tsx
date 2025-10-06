import { Input } from "@/components/ui/input";

const ResetPasswordPage = () => {
  return (
    <div>
      <div>
        <p className="font-bold pb-5">Please input phone number </p>
        <form className="space-y-2">
          <Input type="email" name="email" placeholder="Phone number" />
         
          <div className="mb-10">
            <input
              type="submit"
              value="Send OTP"
              className="w-full cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
            />
          </div>
        </form>
      
      </div>
    </div>
  );
};
export default ResetPasswordPage;