import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Description, OverviewWrapper, Title } from './Styles.jsx';

export default function OverViewComponent({ icon, title, description }) {
  return (
    <OverviewWrapper>
      <div>
        <FontAwesomeIcon color="#f2545f" size="2xl" icon={icon} />
      </div>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </OverviewWrapper>
  )
}
