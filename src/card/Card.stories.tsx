import { Card, CardProps, Container } from "@mui/material";
import { Story } from "@storybook/react/types-6-0";

export default {
  title: "components/Card",
  component: Card,
};

const Template: Story<CardProps> = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 2 }}>
      <Card sx={{ maxWidth: 500, height: 400 }}>hi</Card>
    </Container>
  );
};

export const Default: Story<CardProps> = Template.bind({});
