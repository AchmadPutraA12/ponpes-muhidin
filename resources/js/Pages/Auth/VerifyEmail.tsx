import GuestLayout from "@/Layouts/GuestLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import AuthLayout from "@/Layouts/AuthLayout";
import { Button } from "@/Components/ui/button";

export default function VerifyEmail({ status }: { status?: string }) {
    const { post, processing } = useForm({});

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("verification.send"));
    };

    return (
        <GuestLayout head="Verify Email">
            <AuthLayout>
                <div className="flex flex-col gap-2">
                    <h1 className="text-xl font-bold">Verifikasi Email Anda</h1>
                    <p className="text-sm">
                        Terima kasih telah mendaftar! Sebelum memulai, bisakah
                        Anda verifikasi alamat email Anda dengan mengklik tautan
                        yang baru saja kami buat dikirim ke email Anda? Jika
                        Anda tidak menerima email, kami akan menerima dengan
                        senang hati mengirimi Anda yang lain.
                    </p>
                </div>

                {status === "verification-link-sent" && (
                    <div className="mb-4 my-4 bg-primary/10 p-4 rounded-md font-semibold text-sm text-green-600">
                        Tautan verifikasi baru telah dikirim ke email Anda.
                        Silahkan cek email Anda !
                    </div>
                )}

                <form onSubmit={submit}>
                    <div className="mt-4 flex items-center justify-between">
                        <Button disabled={processing}>
                            Kirim ulang verifikasi email
                        </Button>

                        <Link
                            href={route("logout")}
                            method="post"
                            as="button"
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Log Out
                        </Link>
                    </div>
                </form>
            </AuthLayout>
        </GuestLayout>
    );
}
