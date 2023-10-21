import Checkbox from "../ui/checkbox/checkbox";
import DateInput from "../ui/date/date";
import TextInput from "../ui/input/input";
import Select from "../ui/select/select";
import SwitchBox from "../ui/switch-box/switch-box";
import { CheckboxLabel, CheckboxWrapper, Row, Wrapper } from "./styled";

const Form = () => {
  return (
    <Wrapper>
      <Row>
        <TextInput placeholder="Enter Org ID" label="Org Id" />
        <TextInput placeholder="Enter City Name" label="City Name" />
      </Row>
      <Row>
        <TextInput placeholder="Select" label="Org Name" />
        <TextInput placeholder="Enter Team Count" label="Team Name" />
      </Row>
      <Row>
        <Select label="No. of Integrations" value="">
          <option>select1</option>
          <option>select2</option>
        </Select>
        <TextInput placeholder="Select" label="Team Count" />
      </Row>
      <Row>
        <Select label="Similar Month" value="">
          <option>select1</option>
          <option>select2</option>
        </Select>
        <Select label="Go Live Month" value="">
          <option>select1</option>
          <option>select2</option>
        </Select>
      </Row>
      <Row>
        <Select label="Integration Months" value="">
          <option>select1</option>
          <option>select2</option>
        </Select>
        <Select label="TAT for Integration" value="">
          <option>select1</option>
          <option>select2</option>
        </Select>
      </Row>
      <Row>
        <Select label="AI Cycle" value="">
          <option>select1</option>
          <option>select2</option>
        </Select>
        <DateInput label="Integration date" value="" />
      </Row>
      <Row>
        <DateInput label="ERP Date (Agreed)" value="" />
        <DateInput label="ISP Date (Agreed)" value="" />
      </Row>
      <Row>
        <DateInput label="Active AI Time" value="" />
        <DateInput label="Active AI QC Time" value="" />
      </Row>
      <Row>
        <CheckboxWrapper>
          <Checkbox />
          <CheckboxLabel>Monthly Cycles</CheckboxLabel>
        </CheckboxWrapper>
      </Row>
      <Row>
        <SwitchBox/>
        <SwitchBox/>
      </Row>
    </Wrapper>
  );
};

export default Form;
