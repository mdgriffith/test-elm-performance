module Main exposing (..)

import Browser
import Browser.Events
import Element exposing (Element)
import Element.Background as Bg
import Element.Border as Border
import Element.Events as Element
import Element.Font as Font
import Element.Region as Region
import Html exposing (Html)
import Html.Attributes as Html
import Html.Events as Html
import Html.Keyed as Keyed
import Html.Lazy as Html
import Time


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
    | Impl_SE


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
                , Html.li [] [ Html.text "Style Elements (stylish elephants)" ]
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
            , Html.button [ Html.onClick (SetImpl Impl_SE) ] [ Html.text "Stylish Elephants" ]
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

        Impl_SE ->
            "Stylish Elephants (6.0.2)"


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

        Impl_SE ->
            state.actions
                |> List.map (\( idx, openMsg ) -> accordionSE openMsg (Just idx == state.open) accordion)
                |> Element.column [ Element.padding 32, Element.spacing 16 ]
                |> Element.layout []
                |> Tuple.pair "style-elements"



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
        [ Html.h4
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



-- Stylish Elephants


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


accordionSE : msg -> Bool -> Accordion -> Element msg
accordionSE openMsg isOpen acc =
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
