module Main exposing (main)

import Browser
import Browser.Events
import Css
import Element exposing (Element)
import Element.Background as Bg
import Element.Border as Border
import Element.Events as Element
import Element.Font as Font
import Element.Region as Region
import ElmUi3 as Ui3
import Html exposing (Html)
import Html.Attributes as Html
import Html.Events as Html
import Html.Keyed as Keyed
import Html.Lazy as Html
import Html.Styled as Styled
import Html.Styled.Attributes as StyledAttrs
import Html.Styled.Events as StyledEvents
import Time
import Ui
import Ui.Accessibility
import Ui.Events
import Ui.Font


type alias State =
    { open : Maybe Int
    , impl : Impl
    , count : Int
    , actions : List ( Int, Msg )
    , times : List Float
    , frameCount : Int
    , isRunning : Bool
    }


type alias Accordion =
    { heading : String
    , content : String
    }


accordion : Accordion
accordion =
    { heading = "Accorion Item (click to open)"
    , content = "Ipsum corrupti repudiandae hic deleniti ex aut adipisci ducimus et facere magni officiis? Ut debitis eius amet harum aliquam magnam perferendis dignissimos, quidem fugit quae soluta optio excepturi! Repellat cumque?"
    }


testCount : Int
testCount =
    30


type Impl
    = Impl_HtmlCss
    | Impl_HtmlInline
    | Impl_ElmUI
    | Impl_ElmUI2
    | Impl_ElmUI3
    | Impl_ElmCss


type Msg
    = Open Int
    | StartTest
    | TickTest Float
    | SetImpl Impl
    | SetCount Int


main : Program () State Msg
main =
    Browser.element
        { init = init
        , update = update
        , view = view
        , subscriptions = subscriptions
        }


init : () -> ( State, Cmd Msg )
init _ =
    { open = Nothing
    , impl = Impl_HtmlCss
    , count = 64
    , actions = makeActions 100
    , times = []
    , frameCount = 0
    , isRunning = False
    }
        |> noCmd


makeActions : Int -> List ( Int, Msg )
makeActions count =
    List.range 0 (count - 1)
        |> List.map (\i -> ( i, Open i ))


update : Msg -> State -> ( State, Cmd Msg )
update msg state =
    case msg of
        Open idx ->
            { state
                | open =
                    case state.open of
                        Just i ->
                            if i == idx then
                                Nothing

                            else
                                Just idx

                        Nothing ->
                            Just idx
            }
                |> noCmd

        SetImpl impl ->
            { state | impl = impl }
                |> noCmd

        SetCount count ->
            { state
                | count = count
                , actions = makeActions count
            }
                |> noCmd

        StartTest ->
            ( { state
                | open = Nothing
                , times = []
                , isRunning = True
                , frameCount = 0
              }
            , Cmd.none
            )

        TickTest diff ->
            { state
                | times = diff :: state.times
                , frameCount = state.frameCount + 1
                , isRunning = state.frameCount < testCount
                , open = Just (modBy state.count state.frameCount)
            }
                |> noCmd


subscriptions : State -> Sub Msg
subscriptions state =
    if state.isRunning then
        Browser.Events.onAnimationFrameDelta TickTest

    else
        Sub.none


noCmd : State -> ( State, Cmd Msg )
noCmd s =
    ( s, Cmd.none )



-- VIew


view : State -> Html Msg
view state =
    Html.div
        [ Html.class "page" ]
        [ Html.lazy heading 1
        , renderSummary state
        , Html.h2 [] [ Html.text <| "Implementation: " ++ implLabel state.impl ]
        , Html.p [] [ Html.text <| "Number of accordions: " ++ String.fromInt state.count ]
        , Keyed.node "div" [] [ renderAccordions state ]
        , Html.node "style" [] [ Html.text css ]
        ]


heading : a -> Html Msg
heading _ =
    Html.div []
        [ Html.p []
            [ Html.text "This is an attempt to compare the rendering performance of the Virtual Dom with three different implementations for style."
            , Html.ul []
                [ Html.li [] [ Html.text "HTML with CSS classes (only CSS classes handled by VDOM)" ]
                , Html.li [] [ Html.text "HTML with inline style (all style is handled by VDOM)" ]
                , Html.li [] [ Html.text "mdgriffith/elm-ui" ]
                , Html.li [] [ Html.text "rtfeldman/elm-css" ]
                ]
            , Html.text "The rendering times are logged to the console and performance timeline (Chrome)."
            , Html.br [] []
            , Html.text "Three different metrics are logged:"
            , Html.ul []
                [ Html.li [] [ Html.text "Build VDOM: This is the view function in the Elm program." ]
                , Html.li [] [ Html.text "Diff: The diffing of VDOM" ]
                , Html.li [] [ Html.text "Apply: Applying the diff to the \"real\" DOM." ]
                ]
            ]
        , Html.p [] [ Html.text "Use implementation:" ]
        , Html.div [ Html.class "header-button-row" ]
            [ Html.button [ Html.onClick (SetImpl Impl_HtmlCss) ] [ Html.text "HTML / CSS" ]
            , Html.button [ Html.onClick (SetImpl Impl_HtmlInline) ] [ Html.text "HTML Inline" ]
            , Html.button [ Html.onClick (SetImpl Impl_ElmUI) ] [ Html.text "elm-ui" ]
            , Html.button [ Html.onClick (SetImpl Impl_ElmUI2) ] [ Html.text "elm-ui 2" ]
            , Html.button [ Html.onClick (SetImpl Impl_ElmUI3) ] [ Html.text "elm-ui 3.2" ]
            , Html.button [ Html.onClick (SetImpl Impl_ElmCss) ] [ Html.text "elm-css" ]
            ]
        , Html.p [] [ Html.text "Repeat the accordion this many times:" ]
        , Html.div [ Html.class "header-button-row" ]
            [ Html.button [ Html.onClick (SetCount 64) ] [ Html.text "64" ]
            , Html.button [ Html.onClick (SetCount 128) ] [ Html.text "128" ]
            , Html.button [ Html.onClick (SetCount 256) ] [ Html.text "256" ]
            , Html.button [ Html.onClick (SetCount 512) ] [ Html.text "512" ]
            , Html.button [ Html.onClick (SetCount 1024) ] [ Html.text "1024" ]
            , Html.button [ Html.onClick (SetCount 2048) ] [ Html.text "2048" ]
            , Html.button [ Html.onClick (SetCount 4096) ] [ Html.text "4096" ]
            , Html.button [ Html.onClick (SetCount 8192) ] [ Html.text "8192" ]
            ]
        , Html.p []
            [ Html.text <| "This will render " ++ String.fromInt testCount ++ " frames and measure the time between each animation frame. "
            , Html.text <| "On each frame the next accordion is opened."
            ]
        , Html.button [ Html.onClick StartTest ] [ Html.text "Run Test" ]
        , Html.hr [] []
        ]


renderSummary : State -> Html Msg
renderSummary state =
    if state.isRunning then
        Html.div [] [ Html.text "Wait for test to complete" ]

    else if List.length state.times == 0 then
        Html.div [] [ Html.text "Hit start to run test" ]

    else
        let
            testSum =
                List.sum state.times

            avg =
                testSum / (toFloat <| List.length state.times)
        in
        Html.div []
            [ Html.text <| "Total time: " ++ (String.fromInt <| round testSum) ++ "ms | "
            , Html.text <| "Avg time / frame: " ++ (String.fromInt <| round avg) ++ "ms | "
            , Html.text <| "Avg frame rate: " ++ (String.fromInt <| round (1000 / avg)) ++ " frames / sec"
            ]


implLabel : Impl -> String
implLabel impl =
    case impl of
        Impl_HtmlCss ->
            "HTML / CSS"

        Impl_HtmlInline ->
            "HTML with inline style"

        Impl_ElmUI ->
            "elm-ui (1.0.0)"

        Impl_ElmUI2 ->
            "elm-ui (2.0.0)"

        Impl_ElmUI3 ->
            "elm-ui (3.0.1)"

        Impl_ElmCss ->
            "elm-css (15.1.0)"


renderAccordions : State -> ( String, Html Msg )
renderAccordions state =
    case state.impl of
        Impl_HtmlCss ->
            state.actions
                |> List.map (\( idx, openMsg ) -> accordionHtmlCss openMsg (Just idx == state.open) accordion)
                |> Html.div [ Html.class "wrapper" ]
                |> Tuple.pair "html-css"

        Impl_HtmlInline ->
            state.actions
                |> List.map (\( idx, openMsg ) -> accordionHtmlInline openMsg (Just idx == state.open) accordion)
                |> Html.div
                    [ Html.style "padding" "32px"
                    ]
                |> Tuple.pair "html-inline"

        Impl_ElmUI ->
            state.actions
                |> List.map (\( idx, openMsg ) -> accordionElmUI openMsg (Just idx == state.open) accordion)
                |> Element.column [ Element.padding 32, Element.spacing 16, Element.width Element.fill ]
                |> Element.layout []
                |> Tuple.pair "style-elements"

        Impl_ElmUI2 ->
            state.actions
                |> List.map (\( idx, openMsg ) -> accordionElmUI2 openMsg (Just idx == state.open) accordion)
                |> Ui.column [ Ui.padding 32, Ui.spacing 16, Ui.width Ui.fill ]
                |> Ui.layout []
                |> Tuple.pair "elm-ui-2"

        Impl_ElmUI3 ->
            state.actions
                |> List.map (\( idx, openMsg ) -> accordionElmUI3 openMsg (Just idx == state.open) accordion)
                -- |> Ui2.column [ Ui.padding 32, Ui.spacing 16, Ui.width Ui.fill ]
                |> Ui3.column []
                |> Ui3.layout []
                |> Tuple.pair "elm-ui-3"

        Impl_ElmCss ->
            state.actions
                |> List.map (\( idx, openMsg ) -> accordionElmCss openMsg (Just idx == state.open) accordion)
                |> Styled.div
                    [ StyledAttrs.css
                        [ Css.padding (Css.px 32)
                        ]
                    ]
                |> Styled.toUnstyled
                |> Tuple.pair "elm-css"



-- HTML / CSS


accordionHtmlCss : msg -> Bool -> Accordion -> Html msg
accordionHtmlCss openMsg isOpen acc =
    Html.div
        [ Html.class "accordion" ]
        [ Html.h4
            [ Html.onClick openMsg
            , Html.class "header"
            ]
            [ Html.text acc.heading
            ]
        , Html.p
            [ Html.class "content"
            , Html.classList
                [ ( "open", isOpen )
                ]
            ]
            [ Html.text acc.content
            ]
        ]


css : String
css =
    """
.page {
    padding: 12px;
}
.header-button-row {
    margin: 8px 0;
}

.header-button-row button {
    margin: 0 4px;
}
.wrapper {
    padding: 32px;
}
.accordion .header {
    cursor: pointer;
    margin: 0;
    font-family: Arial, sans-serif;
    font-weight: 400;
    border: solid 1px #aaa;
    background: #eee;
    padding: 8px;
    font-size: 20px;
    line-height: 20px;
}
.accordion .header:hover {
    border-color: #666;
}

.accordion .content {
    overflow: hidden;
    height: 0;
    font-family: Arial, sans-serif;
    margin: 12px 0;
    line-height: 21px;
}

.accordion .content.open {
    height: auto;
}
"""



-- HTML with inline style


accordionHtmlInline : msg -> Bool -> Accordion -> Html msg
accordionHtmlInline openMsg isOpen acc =
    Html.div
        []
        [ Html.button
            [ Html.onClick openMsg
            , Html.style "margin" "0"
            , Html.style "cursor" "pointer"
            , Html.style "font-family" "Arial, sans-serif"
            , Html.style "background" "#eee"
            , Html.style "padding" "8px"
            , Html.style "font-weight" "400"
            , Html.style "font-size" "20px"
            , Html.style "border" "solid 1px #aaa"
            , Html.style "line-height" "20px"
            ]
            [ Html.text acc.heading
            ]
        , Html.p
            [ if isOpen then
                Html.style "height" "auto"

              else
                Html.style "height" "0"
            , Html.style "overflow" "hidden"
            , Html.style "font-family" "Arial, sans-serif"
            , Html.style "margin" "12px 0"
            , Html.style "line-height" "21px"
            ]
            [ Html.text acc.content
            ]
        ]



-- Elm UI


attributes : List (Element.Attribute msg)
attributes =
    [ Element.pointer
    , Element.padding 8
    , Font.size 20
    , Bg.color (Element.rgb (0xEE / 255) (0xEE / 255) (0xEE / 255))
    , Font.color (Element.rgb 0x00 0x00 0x00)
    , Font.family [ Font.typeface "Arial", Font.sansSerif ]
    , Element.width Element.fill
    , Border.color (Element.rgb (0xAA / 255) (0xAA / 255) (0xAA / 255))
    , Border.solid
    , Border.width 1
    , Region.heading 4
    ]


openAttributes : List (Element.Attribute msg)
openAttributes =
    [ Element.height Element.shrink
    , Element.clip
    , Element.width Element.fill
    , Font.family [ Font.typeface "Arial", Font.sansSerif ]
    , Font.size 16
    , Font.color (Element.rgb 0x00 0x00 0x00)
    ]


columnAttributes : List (Element.Attribute msg)
columnAttributes =
    [ Element.width Element.fill
    , Element.spacing 12
    ]


accordionElmUI : msg -> Bool -> Accordion -> Element msg
accordionElmUI openMsg isOpen acc =
    Element.column columnAttributes
        [ Element.paragraph
            (Element.onClick openMsg :: attributes)
            [ Element.text acc.heading
            ]
        , if isOpen then
            Element.paragraph
                openAttributes
                [ Element.text acc.content
                ]

          else
            Element.none
        ]



-- elm-ui-2


openAttributes2 : List (Ui.Attribute msg)
openAttributes2 =
    [ Ui.width Ui.fill
    , Ui.Font.family [ Ui.Font.typeface "Arial", Ui.Font.sansSerif ]
    , Ui.Font.size 16
    , Ui.Font.color (Ui.rgb 0x00 0x00 0x00)
    ]


columnAttributes2 : List (Ui.Attribute msg)
columnAttributes2 =
    [ Ui.width Ui.fill
    , Ui.spacing 12
    ]


attributes2 : List (Ui.Attribute msg)
attributes2 =
    [ Ui.pointer
    , Ui.padding 8
    , Ui.Font.size 20
    , Ui.background (Ui.rgb 0xEE 0xEE 0xEE)
    , Ui.Font.color (Ui.rgb 0x00 0x00 0x00)
    , Ui.Font.family [ Ui.Font.typeface "Arial", Ui.Font.sansSerif ]
    , Ui.width Ui.fill
    , Ui.border 1
    , Ui.borderColor (Ui.rgb 0xAA 0xAA 0xAA)

    -- { color = Ui.rgb 0xAA 0xAA 0xAA
    -- , width = 1
    -- }
    -- , Ui.Accessibility.heading 4
    ]


accordionElmUI2 : msg -> Bool -> Accordion -> Ui.Element msg
accordionElmUI2 openMsg isOpen acc =
    Ui.column columnAttributes2
        [ Ui.paragraph
            (Ui.Events.onClick openMsg :: attributes2)
            -- attributes2
            [ Ui.text acc.heading
            ]
        , if isOpen then
            Ui.paragraph
                openAttributes2
                [ Ui.text acc.content
                ]

          else
            Ui.none
        ]



-- elm-css


accordionElmCss : msg -> Bool -> Accordion -> Styled.Html msg
accordionElmCss openMsg isOpen acc =
    Styled.div
        []
        [ Styled.h4
            [ StyledEvents.onClick openMsg
            , StyledAttrs.css
                [ Css.margin Css.zero
                , Css.cursor Css.pointer
                , Css.fontFamilies [ "Arial", .value Css.sansSerif ]
                , Css.backgroundColor (Css.hex "eee")
                , Css.padding (Css.px 8)
                , Css.fontWeight (Css.int 400)
                , Css.fontSize (Css.px 20)
                , Css.border3 (Css.px 1) Css.solid (Css.hex "aaa")
                , Css.lineHeight (Css.px 20)
                ]
            ]
            [ Styled.text acc.heading
            ]
        , Styled.p
            [ StyledAttrs.css
                [ if isOpen then
                    Css.height Css.auto

                  else
                    Css.height Css.zero
                , Css.overflow Css.hidden
                , Css.fontFamilies [ "Arial", .value Css.sansSerif ]
                , Css.margin2 (Css.px 12) Css.zero
                , Css.lineHeight (Css.px 21)
                ]
            ]
            [ Styled.text acc.content
            ]
        ]



{- ELM UI 3 -}


openAttributes3 : List (Ui3.Attr msg)
openAttributes3 =
    [--      Ui.width Ui.fill
     -- , Ui.Font.family [ Ui.Font.typeface "Arial", Ui.Font.sansSerif ]
     -- , Ui.Font.size 16
     -- , Ui.Font.color (Ui.rgb 0x00 0x00 0x00)
    ]


columnAttributes3 : List (Ui3.Attr msg)
columnAttributes3 =
    [--     Ui.width Ui.fill
     -- , Ui.spacing 12
    ]


attributes3 : List (Ui3.Attr msg)
attributes3 =
    [--      Ui.pointer
     -- , Ui.padding 8
     -- , Ui.Font.size 20
     -- , Ui.background (Ui.rgb 0xEE 0xEE 0xEE)
     -- , Ui.Font.color (Ui.rgb 0x00 0x00 0x00)
     -- , Ui.Font.family [ Ui.Font.typeface "Arial", Ui.Font.sansSerif ]
     -- , Ui.width Ui.fill
     -- , Ui.border
     --     { color = Ui.rgb 0xAA 0xAA 0xAA
     --     , width = 1
     --     }
     -- , Ui.Accessibility.heading 4
    ]


accordionElmUI3 : msg -> Bool -> Accordion -> Ui3.Element msg
accordionElmUI3 openMsg isOpen acc =
    Ui3.column columnAttributes3
        [ Ui3.row
            -- (Ui3.Events.onClick openMsg :: attributes3)
            attributes3
            [ Ui3.text acc.heading
            ]
        , if isOpen then
            Ui3.row
                openAttributes3
                [ Ui3.text acc.content
                ]

          else
            Ui3.none
        ]
