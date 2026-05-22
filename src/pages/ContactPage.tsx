import { FormEvent, useState } from 'react';
import Button from '../components/common/Button';
import { Input, Textarea } from '../components/common/Input';
import SectionTitle from '../components/common/SectionTitle';

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

type ContactErrors = Partial<Record<keyof ContactForm, string>>;

const initialForm: ContactForm = {
  name: '',
  email: '',
  message: '',
};

function validateContactForm(form: ContactForm) {
  const errors: ContactErrors = {};

  if (!form.name.trim()) {
    errors.name = '姓名不能为空';
  }
  if (!/^\S+@\S+\.\S+$/.test(form.email)) {
    errors.email = '邮箱格式不正确';
  }
  if (!form.message.trim()) {
    errors.message = '留言不能为空';
  }

  return errors;
}

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [success, setSuccess] = useState('');

  const updateField = <Key extends keyof ContactForm>(key: Key, value: ContactForm[Key]) => {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setSuccess('');
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateContactForm(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setForm(initialForm);
    setSuccess('提交成功，我们会在模拟流程中记录这条留言。');
  };

  return (
    <section className="mx-auto max-w-5xl px-5 py-12">
      <SectionTitle
        eyebrow="Contact"
        title="联系我们"
        description="合作、售后、选品建议或品牌联名，都可以先在这里留一条消息。"
      />
      <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
        <aside className="rounded-[1.75rem] bg-gradient-to-br from-pink-100 via-yellow-100 to-sky-100 p-6 shadow-soft">
          <div className="rounded-[1.5rem] bg-white/75 p-6">
            <h2 className="text-2xl font-black">dopafun 工作室</h2>
            <p className="mt-4 leading-7 text-stone-600">
              当前为 MVP 演示版本，表单不会真实发送邮件。上线后可接入客服工单、企业邮箱或 CRM。
            </p>
            <div className="mt-6 grid gap-2 text-sm font-semibold text-stone-600">
              <span>邮箱：hello@dopafun.example</span>
              <span>小红书 / Instagram：@dopafun.stationery</span>
            </div>
          </div>
        </aside>
        <form onSubmit={submit} className="grid gap-5 rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm">
          <Input
            label="姓名"
            value={form.name}
            error={errors.name}
            onChange={(event) => updateField('name', event.target.value)}
          />
          <Input
            label="邮箱"
            type="email"
            value={form.email}
            error={errors.email}
            onChange={(event) => updateField('email', event.target.value)}
          />
          <Textarea
            label="留言"
            value={form.message}
            error={errors.message}
            onChange={(event) => updateField('message', event.target.value)}
          />
          {success ? <p className="rounded-2xl bg-lime-50 px-4 py-3 text-sm text-lime-800">{success}</p> : null}
          <Button type="submit" size="lg">
            提交留言
          </Button>
        </form>
      </div>
    </section>
  );
}
