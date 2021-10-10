import React from "react";
import { Faqs, OptForm } from "../components";
import faqsData from "../fixtures/faqs.json";

export function FaqContainer() {
  return (
    <Faqs>
      <Faqs.Title>Frequently Asked Questions</Faqs.Title>
      {faqsData.map((item) => (
        <Faqs.Item key={item.id}>
          <Faqs.Header>{item.header}</Faqs.Header>
          <Faqs.Body>{item.body}</Faqs.Body>
        </Faqs.Item>
      ))}
      <Faqs.Item />

      <OptForm>
        <OptForm.Break />
        <OptForm.Text>
          Ready to watch? Enter your email to create or restart your membership.
        </OptForm.Text>
        <OptForm.Input placeholder="Email address" />
        <OptForm.Button>Try it now</OptForm.Button>
      </OptForm>
    </Faqs>
  );
}
