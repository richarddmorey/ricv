% Generated by roxygen2: do not edit by hand
% Please edit documentation in R/options.R
\name{ricv_opts}
\alias{ricv_opts}
\title{Create ricv options}
\usage{
ricv_opts(
  labelOptionsBefore = "Before",
  labelOptionsAfter = "After",
  labelOptionsOnHover = TRUE,
  controlColor = "#FFFFFF",
  controlShadow = TRUE,
  addCircle = TRUE,
  addCircleBlur = TRUE,
  showLabels = TRUE,
  smoothing = TRUE,
  smoothingAmount = 200,
  hoverStart = FALSE,
  verticalMode = FALSE,
  startingPoint = 50,
  fluidMode = FALSE
)
}
\arguments{
\item{labelOptionsBefore}{A character string for the 'before' label.}

\item{labelOptionsAfter}{A character string for the 'after' label.}

\item{labelOptionsOnHover}{A logical. Whether or not to show the labels only on hover.}

\item{controlColor}{A character string representing a hex color (e.g. "#FFFFFF") for the control line/arrows.}

\item{controlShadow}{A logical. Whether or not to add a shadow for the control line/arrows.}

\item{addCircle}{A logical. Whether or not to add a circle around the control line/arrows.}

\item{addCircleBlur}{A logical. Whether or not to add a blur in the circle around the control line/arrows.}

\item{showLabels}{A logical. Whether or not to show the 'before'/'after' labels (see also the other labelOptions... arguments).}

\item{smoothing}{A logical. Whether or not to smooth (i.e. dampen) the movement of the control line/arrows.}

\item{smoothingAmount}{A numeric value. Set the amount of smoothing.}

\item{hoverStart}{A logical. Whether or not to activate click-less control.}

\item{verticalMode}{A logical. Whether or not to set the control to vertical mode.}

\item{startingPoint}{A numeric value. Represent the percentage where the line start (e.g. '50' means the middle 50%).}

\item{fluidMode}{A logical. Fluid mode enables the container to have fluid height and width, independent of each other, useful for using Image Compare Viewer in a full screen container for instance. The image is dynamically cropped using the CSS background 'cover' property.}
}
\value{
a list of options that can be used for the `options` argument of \code{\link{ricv}}
}
\description{
This function helps you create the list of options that ricv can accept. None of them are mandatory.
One can also create the list by hand, this function is just meant to help you remember the possible
attributes.
}
