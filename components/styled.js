import styled from 'styled-components';

export const brandedPurpleColor = '#7140fe';
export const tagColors = [ '#000eff', '#ff0087', 'blue', 'red', 'grey', 'green', 'yellow' ];

export const Title = styled.Text`
    color: ${brandedPurpleColor};
    font-weight: bold;
    font-size: 28;
    padding-top: 20;
    margin-top: 10;
    margin-bottom: 10;
`;

export const ContentSpacing = styled.View`
    padding-right: 24;
    padding-left: 24;
`;

export const CenterContent = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TextWrapper = styled.Text`
    padding-top: 30;
    font-size: 16;
`;

export const PostImage = styled.Image`
    flex: 1;
    height: 200;
`;