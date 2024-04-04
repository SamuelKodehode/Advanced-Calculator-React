import { Theme, ThemeSettings } from '../helpers/typesAndArrays.ts'

type Props = {
    theme: Theme
    colorTheme: ThemeSettings
    handler: () => void
}

const Switch = (props: Props) => {
    const align: 'start' | 'end' | 'center' =
        props.theme === Theme.Theme1 ? 'start' : props.theme === Theme.Theme2 ? 'center' : 'end'
    return (
        <div className={'switch-wrapper'}>
            <h1
                className={'theme-text'}
                style={{
                    color: props.colorTheme.fontColorScreen
                }}
            >
                THEME
            </h1>
            <div>
                <div style={{ display: 'flex', width: '2rem', justifyContent: 'space-around', fontSize: '0.3rem' }}>
                    <h6 style={{ fontSize: 14, color: props.colorTheme.fontColorScreen }}>1</h6>
                    <h6 style={{ fontSize: 14, color: props.colorTheme.fontColorScreen }}> 2</h6>
                    <h6 style={{ fontSize: 14, color: props.colorTheme.fontColorScreen }}>3</h6>
                </div>
                <div
                    className={'dot-container'}
                    onClick={props.handler}
                    style={{
                        backgroundColor: props.colorTheme.backgroundColorButtons,
                        justifyContent: align
                    }}
                >
                    <div
                        className={'dot'}
                        style={{
                            backgroundColor: props.colorTheme.buttonStyle.tertiary.still.backgroundColor
                        }}
                    ></div>
                </div>
            </div>
        </div>
    )
}

export default Switch
