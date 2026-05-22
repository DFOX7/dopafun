export type NewsletterResult = {
  ok: true;
  email: string;
};

export async function mockSubscribeEmail(email: string): Promise<NewsletterResult> {
  await new Promise((resolve) => window.setTimeout(resolve, 200));
  return { ok: true, email };
}

// 未来可替换为 Mailchimp、Klaviyo、ConvertKit 等邮件营销工具接口。
