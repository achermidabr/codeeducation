FROM golang:1.14 AS builder

WORKDIR /go/src/app
COPY src/ .

RUN go get -d -v ./...
RUN go install -v ./...

RUN GOOS=linux GOARCH=amd64 go build -ldflags="-w -s" -o /go/bin/printinfo


FROM scratch
COPY --from=builder /go/bin/printinfo /go/bin/printinfo
ENTRYPOINT ["/go/bin/printinfo"]