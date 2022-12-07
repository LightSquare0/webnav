import { styled } from "@linaria/react";

export interface RouteStat {
  value: number;
  measurement: string;
  name: string;
}

const SecondaryCard = styled.div`
  background-color: hsla(0, 0%, 12%, 0.65);
  box-shadow: 0px 0px 5px -1px rgba(0, 0, 0, 0.1);
  border-radius: 0.9375rem;
  color: white;
`;

const StatSpan = styled.span`
  display: flex;
`;

const StatValue = styled.div`
  font-family: "Lexend Deca Regular";
  font-size: 3rem;
  width: fit-content;
`;

const StatMeasurement = styled.div`
  font-family: "Lexend Deca Light";
  font-size: 0.875rem;
  margin-left: 0.25rem;
  margin-top: auto;
  line-height: 2rem;
`;

const StatName = styled.div`
  font-family: "Lexend Deca Light";
  font-size: 0.875rem;
  color: #ababab;
`;

const StatCardContent = styled.div`
  max-width: 9.0625rem;
  padding-left: 0.75rem;
  padding-block: 0.75rem;
`;

const RouteStat: React.FC<RouteStat> = ({ value, measurement, name }) => {
  return (
    <SecondaryCard>
      <StatCardContent>
        <StatSpan>
          <StatValue>{value}</StatValue>
          <StatMeasurement>{measurement}</StatMeasurement>
        </StatSpan>
        <StatName>{name}</StatName>
      </StatCardContent>
    </SecondaryCard>
  );
};

export default RouteStat;
