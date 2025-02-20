import styled from '@emotion/styled';

import { ScrollWrapper } from '@/ui/utilities/scroll/components/ScrollWrapper';

const StyledDropdownMenuItemsExternalContainer = styled.div<{
  hasMaxHeight?: boolean;
}>`
  --padding: ${({ theme }) => theme.spacing(1)};

  align-items: flex-start;
  display: flex;

  flex-direction: column;
  max-height: ${({ hasMaxHeight }) => (hasMaxHeight ? '188px' : 'none')};

  padding: var(--padding);

  width: calc(100% - 2 * var(--padding));
`;

const StyledScrollWrapper = styled(ScrollWrapper)`
  width: 100%;
`;

const StyledDropdownMenuItemsInternalContainer = styled.div`
  align-items: stretch;
  display: flex;

  flex-direction: column;
  gap: 2px;
  height: 100%;
  width: 100%;
`;

// TODO: refactor this, the dropdown should handle the max height behavior + scroll with the size middleware
// We should instead create a DropdownMenuItemsContainerScrollable or take for granted that it is the default behavior
export const DropdownMenuItemsContainer = ({
  children,
  hasMaxHeight,
}: {
  children: React.ReactNode;
  hasMaxHeight?: boolean;
}) => {
  return (
    <StyledDropdownMenuItemsExternalContainer hasMaxHeight={hasMaxHeight}>
      {hasMaxHeight ? (
        <StyledScrollWrapper contextProviderName="dropdownMenuItemsContainer">
          <StyledDropdownMenuItemsInternalContainer>
            {children}
          </StyledDropdownMenuItemsInternalContainer>
        </StyledScrollWrapper>
      ) : (
        <StyledDropdownMenuItemsInternalContainer>
          {children}
        </StyledDropdownMenuItemsInternalContainer>
      )}
    </StyledDropdownMenuItemsExternalContainer>
  );
};
