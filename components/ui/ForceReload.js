import React from 'react';
import { RefreshControl, SafeAreaView, ScrollView, Platform } from "react-native";

const ForceReload = ({ isRefreshing, onRefresh, children }) => (
    <ScrollView
        style={ { height: '100%' } }
        refreshControl={
            <RefreshControl
                refreshing={ isRefreshing }
                onRefresh={ onRefresh }/>
        }>
        <SafeAreaView style={ { paddingTop: Platform.OS === 'ios' ? 4 : 8 } }>
            { children }
        </SafeAreaView>
    </ScrollView>
);

export default ForceReload;