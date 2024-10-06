'use client';

import Link from 'next/link';

import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui';
import { Icons } from '@/components/icons';
import { loginSchema, LoginSchemaType } from './login.yup-schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputCombo, InputComboForPassword } from '@/components/forms';
import { Fragment } from 'react';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: LoginSchemaType) => {
    console.log(data);
  };

  return (
    <Fragment>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to create your account
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-6">
              <div>
                <div className="space-y-2">
                  <InputCombo
                    register={register('email')}
                    error={errors.email?.message}
                    labelName="Email"
                    placeholder="name@example.com"
                    type="email"
                  />
                  <InputComboForPassword
                    register={register('password')}
                    error={errors.password?.message}
                    labelName="password"
                    placeholder="*****"
                  />
                </div>

                <Button className="w-full" type="submit">
                  Sign I n with Email
                </Button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>
              <Button variant="outline" type="button">
                <Icons.gitHub className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </div>
          </form>
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{' '}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </Fragment>
  );
}
