import { ImageOff, MoreVertical, PlusCircle } from "lucide-react"
import ServerPageCard from "@/components/shared/ServerPageCard"
import EmptyCard from "@/components/shared/EmptyCard"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import Form from "next/form"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { deleteFactoryAction } from "@/actions/factory.action"
import { getAllStyles } from "@/dl/styles.data"
import { deleteStyleAction } from "@/actions/style.action"

export default async function StylesPage({ searchParams }: { searchParams: Promise<{ page: string; size: string }> }) {
	const { page, size } = await searchParams
	const pageNumber = +page > 1 ? +page : 1
	const pageSize = +size || 10
	const styles = await getAllStyles(pageSize, pageNumber)

	return (
		<ServerPageCard
			btnTitle="add style"
			icon={PlusCircle}
			title={"all styles"}
			description={"All styles in the database."}
			href={"/server/styles/add"}
		>
			{!styles?.data.length ? (
				<EmptyCard href={"/server/styles/add"} linkTitle={"add style"} />
			) : (
				<Table>
					{/* ---------------------------- TableHeader ---------------------------- */}
					<TableHeader>
						<TableRow>
							<TableHead>title</TableHead>
							<TableHead>slug</TableHead>
							<TableHead>mobile</TableHead>
							<TableHead className="text-left">settings</TableHead>
						</TableRow>
					</TableHeader>
					{/* ----------------------------- TableBody ----------------------------- */}
					<TableBody>
						{styles.data.map(({ id, description, title, slug }) => (
							<TableRow key={id}>
								<TableCell className="capitalize ">{title}</TableCell>
								<TableCell>{slug}</TableCell>
								<TableCell>{description}</TableCell>

								{/* -------------------------------- settings -------------------------------- */}
								<TableCell className="text-left">
									<DropdownMenu>
										<DropdownMenuTrigger>
											<MoreVertical />
										</DropdownMenuTrigger>
										<DropdownMenuContent align="start" className="space-y-2">
											<DropdownMenuItem asChild>
												<Button variant={"default"} size={"full"} asChild>
													<Link href={`/server/styles/edit/${slug}`}>edit</Link>
												</Button>
											</DropdownMenuItem>
											{/* ---------------------------- delete --------------------------- */}
											<DropdownMenuItem asChild>
												<Dialog>
													<DialogTrigger asChild>
														<Button variant={"destructive"} size={"full"}>
															delete
														</Button>
													</DialogTrigger>
													<DialogContent>
														<DialogHeader>
															<DialogTitle>Are you sure you want to delete this style ?</DialogTitle>
															<DialogDescription>
																This action can not be undone. This will permanently delete this style and remove its
																data from our servers.
															</DialogDescription>
														</DialogHeader>
														<div className="flex items-center justify-between ">
															<Button asChild>
																<DialogClose>cancel</DialogClose>
															</Button>
															<Form action={deleteStyleAction}>
																<Input type="hidden" name="slug" value={slug} />
																<Button variant={"destructive"} type="submit">
																	delete
																</Button>
															</Form>
														</div>
													</DialogContent>
												</Dialog>
											</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
					{/* ---------------------------- Pagination ---------------------------- */}
					<TableCaption>
						<Pagination>
							<PaginationContent>
								<PaginationItem>
									{/* --------------------------- Previous --------------------------- */}
									{pageNumber > 1 && <PaginationPrevious href={`?size=${pageSize}&page=${pageNumber - 1}`} />}
								</PaginationItem>
								{/* ------------------------- PaginationLink ------------------------ */}
								{Array.from({ length: styles.totalPages ?? 1 }).map((_, index) => (
									<PaginationItem key={index}>
										<PaginationLink href={`?size=${pageSize}&page=${index + 1}`} isActive={pageNumber === index + 1}>
											{index + 1}
										</PaginationLink>
									</PaginationItem>
								))}
								<PaginationItem>
									{/* ----------------------------- Next ----------------------------- */}
									{pageNumber < styles.totalPages && (
										<PaginationNext href={`?size=${pageSize}&page=${pageNumber + 1}`} />
									)}
								</PaginationItem>
							</PaginationContent>
						</Pagination>
					</TableCaption>
				</Table>
			)}
		</ServerPageCard>
	)
}
