import styled from 'styled-components';

export const Title = styled.Text`
    font-weight: bold;
    font-size: 18;
    text-align: center;
    margin-top: 10;
    margin-bottom: 10;
`;

export const SubTitle = styled.Text`
    font-weight: bold;
    font-size: 16;
    margin-top: 10;
    margin-bottom: 10;
`;

export const ContentSpacing = styled.View`
    padding-right: 15;
    padding-left: 15;
`;

export const CenterContent = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TextWrapper = styled.Text`
    padding-top: 10;
    font-size: 16;
`;

export const Tag = styled.TouchableOpacity`
    background-color: ${ props => props.color || 'navy' };
    padding-top: 5;
    padding-bottom: 5;
    padding-left: 10;
    padding-right: 10;
    margin-right: 3;
    border-radius: 5;
`;

export const TagText = styled.Text`
    color: white;
    font-weight: bold;
`;

export const PostImage = styled.Image`
    flex: 1;
    height: 200;
`;

export const WelcomeMessage = styled.Text`
    font-weight: bold;
       font-size: 26;
`;

export const Avatar = styled.Image`
      width: 125;
        height: 125;
        border-radius: 65;
`;
