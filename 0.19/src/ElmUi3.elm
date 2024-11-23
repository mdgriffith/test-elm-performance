module ElmUi3 exposing (..)

import Html
import Html.Attributes as Attr


type Element msg
    = Html (Html.Html msg)
    | Text String


type Attr msg
    = Attr (Html.Attribute msg)


layout : List (Attr msg) -> Element msg -> Html.Html msg
layout attrs elem =
    case elem of
        Html html ->
            Html.div (List.map renderAttr attrs) [ html ]

        Text str ->
            Html.div (List.map renderAttr attrs) [ Html.text str ]


toHtml : Element msg -> Html.Html msg
toHtml elem =
    case elem of
        Html html ->
            html

        Text str ->
            Html.text str


renderAttr : Attr msg -> Html.Attribute msg
renderAttr (Attr attr) =
    attr


el : List (Attr msg) -> Element msg -> Element msg
el attrs child =
    Html (Html.div (List.map renderAttr attrs) [ toHtml child ])


none : Element msg
none =
    Text ""


text : String -> Element msg
text =
    Text


column : List (Attr msg) -> List (Element msg) -> Element msg
column attrs children =
    Html (Html.div (Attr.class "column" :: List.map renderAttr attrs) (List.map toHtml children))


row : List (Attr msg) -> List (Element msg) -> Element msg
row attrs children =
    Html (Html.div (Attr.class "row" :: List.map renderAttr attrs) (List.map toHtml children))
