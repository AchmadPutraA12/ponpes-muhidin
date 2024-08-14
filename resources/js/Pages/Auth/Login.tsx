import { useEffect, FormEventHandler, useState } from "react";
import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import { Head, Link, useForm } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import Spinner from "@/Components/Spinner";
import useLocalStorage from "use-local-storage";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import AuthLayout from "@/Layouts/AuthLayout";
import GuestLayout from "@/Layouts/GuestLayout";

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const [email, setEmail] = useLocalStorage("email", "");
    const [password, setPassword] = useLocalStorage("password", "");
    const [rememberMe, setRememberMe] = useLocalStorage("rememberMe", false);
    const { data, setData, post, processing, errors, reset } = useForm({
        email: email || "",
        password: password || "",
        remember: rememberMe,
    });

    const [handleShowPassword, setShowPassword] = useState(false);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("login"), {
            onError: () => reset("password"),
        });
        const rememberMeCheckbox = document.getElementById(
            "terms"
        ) as HTMLInputElement;
        if (rememberMeCheckbox.checked) {
            setEmail(data.email);
            setPassword(data.password);
            setRememberMe(true);
        } else {
            setEmail("");
            setPassword("");
            setRememberMe(false);
        }
    };

    return (
        <GuestLayout head="Login">
            <AuthLayout>
                <div className="flex mt-20 flex-col gap-2">
                    <h1 className="text-xl font-bold">Login</h1>
                    <p className="text-xs md:text-sm bg-primary/10 p-4 rounded-md">
                        Masukkan alamat email dan password Anda yang sesuai dan
                        sudah di daftarkan di Mi Muhyiddin
                    </p>
                </div>
                {status && (
                    <div className="mb-4 font-medium text-sm text-green-600">
                        {status}
                    </div>
                )}

                <form onSubmit={submit} className="relative mt-4">
                    {processing && (
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <Spinner />
                        </div>
                    )}
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            onChange={(e) => setData("email", e.target.value)}
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                            <Input
                                id="password"
                                type={handleShowPassword ? "text" : "password"}
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="current-password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />{" "}
                            <button
                                type="button"
                                onClick={() =>
                                    setShowPassword(!handleShowPassword)
                                }
                                className="absolute right-2 top-1/2 -translate-y-1/2"
                            >
                                {handleShowPassword ? (
                                    <EyeIcon size={20} />
                                ) : (
                                    <EyeOffIcon size={20} />
                                )}
                            </button>
                        </div>

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>
                    <div className="flex items-center w-full mt-4  justify-between">
                        <div className="w-1/2 flex justify-start">
                            <label className="flex items-center">
                                <Checkbox
                                    id="terms"
                                    checked={data.remember}
                                    name="remember"
                                    onChange={(e) =>
                                        setData("remember", e.target.checked)
                                    }
                                />
                                <span className="ms-2 text-sm text-gray-600">
                                    Ingat Saya
                                </span>
                            </label>
                        </div>{" "}
                        {/* {canResetPassword && (
                            <Link
                                className="text-sm flex justify-end w-1/2  text-end  text-zinc-500 decoration-2 hover:underline font-medium"
                                href={route("password.request")}
                            >
                                Lupa Password ?
                            </Link>
                        )} */}
                    </div>

                    <div className="flex flex-col gap-4 items-center justify-end mt-8">
                        <Button className=" w-full" disabled={processing}>
                            Log in
                        </Button>
                        <Link
                            href={route("register")}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Tidak punya akun ?
                        </Link>
                    </div>
                </form>
            </AuthLayout>
        </GuestLayout>
    );
}
