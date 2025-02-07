import React from "react";
import { DefaultProps, LoadingStateProps } from "../../props";
import { Skeleton as MantineSkeleton } from "@mantine/core";
import { MantineNumberSize } from "@mantine/styles";

type Props = {
    /** Should skeleton overlay be displayed */
    visible?: boolean;
    /** Skeleton height */
    height?: number | string;
    /** Skeleton width */
    width?: number | string;
    /** If Skeleton is a circle, it's width and border-radius will be equal to height */
    circle?: boolean;
    /** Radius from theme.radius or number to set border-radius in px */
    radius?: MantineNumberSize;
    /** Whether to show the animation effect */
    animate?: boolean;
    /** Content */
    children?: React.ReactNode;
} & LoadingStateProps &
    DefaultProps;

/**
 * Indicate content loading state. For more information, see: https://mantine.dev/core/skeleton/
 */
const Skeleton = (props: Props) => {
    const { setProps, visible, loading_state, children, ...other } = props;

    return (
        <MantineSkeleton
            {...other}
            visible={visible || (loading_state && loading_state.is_loading)}
        >
            {children}
        </MantineSkeleton>
    );
};

Skeleton._dashprivate_isLoadingComponent = true;

Skeleton.defaultProps = {
    visible: true,
};

export default Skeleton;
